import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {Notebook} from '../../core/model/notebook.model';

@Component({
  selector: 'app-add-notebook',
  templateUrl: './add-notebook.component.html',
  styleUrls: ['./add-notebook.component.css']
})
export class AddNotebookComponent implements OnInit {
  @Output('add')
  add = new EventEmitter();
  addNotebookForm: FormGroup;
  input: boolean = false;
  constructor(private fb: FormBuilder) { }
  submitForm(): void {
    if (this.addNotebookForm.invalid) {
      return alert('表单不可提交');
    }
    const control = this.addNotebookForm.get('name');
    const name = control.value;
    console.log(name);
    this.add.emit(this.createNotebook(name));
    control.reset();

    alert('提交成功');
  }
  ngOnInit(): void {
    this.addNotebookForm = this.fb.group({
      name: [null, [Validators.required]]
    });
  }
  showInput() {
    this.input = true;
  }
  hideInput() {
    this.input = false;
  }

  createNotebook(name: string): Notebook {
    const id = Math.round(Math.random() * 100);
    return {
      id: id,
      slug: 'sdfwer' + id,
      name: name,
      seq: id,
      notes: undefined
    };
  }
}
