import { Component, ViewChild, ElementRef } from '@angular/core';
import { WordcounterApiService } from './wordcounter-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-wordcounter-api';
  backendWords = '';
  wordCount: any;
  area : string | undefined = '';

  instancesList$!: Observable<any[]>;

  constructor(private service: WordcounterApiService) { }

  ngOnInit(): void {
    this.instancesList$ = this.service.returnAllInstances();
  }

  @ViewChild("text") text: ElementRef | undefined;
  words = 0;
  wordCounter() {
    this.wordCount = this.text ? this.text.nativeElement.value.split(/\s+/) : 0;
    this.words = this.wordCount ? this.wordCount.length : 0;
  }

  countWords() {
    this.service.countWords(this.area).subscribe((response) => {
      this.backendWords = response;
    })
  }

  onFileSelected(eve: { target: any; }) {
    let target = eve.target;
    let selectedFile = target.files[0];
    let type = selectedFile.type.split('/')[0]

    let fileReader = new FileReader();
    fileReader.readAsText(selectedFile);
    console.log(selectedFile);

    fileReader.onload=()=>{
      let result = fileReader.result;
      this.area = result?.toString();
    }
  }

  loadFromDatabase(fileText: string) {
    this.area = fileText;
  }

}
