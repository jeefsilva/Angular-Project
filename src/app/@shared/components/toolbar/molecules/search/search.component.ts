import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { debounce } from 'rxjs/internal/operators';
import SearchItem from './search-item';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() clearIcon: boolean;
  @Input() data: SearchItem[] = [];
  @Output() change = new EventEmitter<string>();
  @Output() resultClick = new EventEmitter<SearchItem>();
  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  public text: string;
  public focused: boolean;
  public results: SearchItem[];
  private debouncer = new Subject<string>();

  constructor() {
    this.debouncer
      .pipe(debounce(() => timer(200)))
      .subscribe((value) => {
        this.change.emit(value);
        this.results = this.search(this.data, value);
      });
  }

  private search(data: SearchItem[], text: string, parent?: SearchItem): SearchItem[] {
    if (!text) {
      return null;
    }

    text = text.toLowerCase();
    const results = data.map((d) => {
      let hasKeyword = false;
      if (d.keywords) {
        hasKeyword = !!d.keywords.find((k) => k.startsWith(text));
      }

      let found = [];
      if (hasKeyword || d.title.toLowerCase().includes(text)) {
        const def = parent ? {target: parent.target, scroll: parent.scroll} : {};
        found.push(Object.assign(def, d, {
          title: parent ? `${parent.title} - ${d.title}` : d.title,
        }));
      }

      if (d.children) {
        found = found.concat(this.search(d.children, text, d));
      }

      return found;
    });

    return [].concat.apply([], results);
  }

  onChange() {
    this.text = this.input.nativeElement.value;
    this.debouncer.next(this.text);
  }

  onClickResult(result: SearchItem) {
    this.resultClick.emit(result);
  }

  clear() {
    this.input.nativeElement.value = '';
    this.onChange();
  }

  onBlur() {
    setTimeout(() => this.focused = false, 100);
  }
}
