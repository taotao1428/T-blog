import { Component, OnInit } from '@angular/core';
import {Notebook} from '../core/model/notebook.model';
import {Note} from '../core/model/note.model';
import {BehaviorSubject, from, observable, of, throwError} from 'rxjs';
import {map} from 'rxjs/operators';
import {NoteService} from '../core/service/note.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css'],
  providers: [NoteService]
})
export class WriteComponent implements OnInit {
  notebooks: Notebook[];
  currentNotebook: Notebook;
  currentNote: Note;

  loading = false; 是否正在加载笔记本列表;
  constructor(private noteService: NoteService, private route: ActivatedRoute, private router: Router) {
    this.loadNotebooks();
  }

  loadNotebooks() {
    this.loading = true;
    // this.noteService.getNotebooks()
    //   .subscribe(notebooks => {
    //     this.notebooks = notebooks;
    //     this.loading = false;
    //     this.focusNotebook(this.notebooks[0]);
    //   }, msg => {
    //     alert('获取笔记本列表失败:' + msg);
    //     this.loading = false;
    //   });
    setTimeout(() => {
      this.notebooks = [
        {
          id: 1,
          slug: 'sdf324324',
          name: '笔记本',
          seq: 10,
          notes: undefined
        },
        {
          id: 2,
          slug: 'sdf323sdf43',
          name: '随笔',
          seq: 11,
          notes: undefined
        },
        {
          id: 3,
          slug: 'sdf3ddf4',
          name: 'js笔记',
          seq: 20,
          notes: undefined
        }
      ];
      this.focusNotebook(this.notebooks[0]);
      this.loading = false;
    }, 2000);
  }

  ngOnInit() {
    console.log(this.route);
    this.route.params.subscribe(data => console.log(data));

    setTimeout(() => {
      this.router.navigate(['write', 23432]);
    }, 6000);
    // this.focusNotebook(this.notebooks[0]);
    // const subject = new BehaviorSubject({code: 1});
    // let observable = subject.asObservable().pipe(map(x => {
    //   if (x.code === 0) {
    //     throw new Error('aa');
    //     // return;
    //   }
    //   return x;
    // }));
    // // observable = from([1, 34, 34434]).pipe(map(data => ));
    // observable.subscribe((data) => {console.log(data); }, (err) => console.log(err));
    // subject.next({code: 1});
    // subject.next({code: 0});
    // subject.next({code: 10});
  }



  /**
   * 添加新的笔记本，放入到第一的位置
   * @param notebook
   */
  addNotebook(notebook: Notebook): void {
    this.notebooks.unshift(notebook);
    this.focusNotebook(notebook);
  }

  /**
   * 删除一个笔记本
   * @param notebook
   */
  deleteNotebook(notebook: Notebook): void {
    const index = this.notebooks.indexOf(notebook);
    this.notebooks.splice(index, 1);
    this.focusNotebook(this.notebooks[0]);
  }

  /**
   * 让二级菜单集中这个笔记本
   * @param notebook
   */
  focusNotebook(notebook: Notebook) {
    this.currentNotebook = notebook;
  }
}
