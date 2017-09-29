import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBodyComponent } from './message-body.component';

describe('MessageBodyComponent', () => {
  let component: MessageBodyComponent;
  let fixture: ComponentFixture<MessageBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
