import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhamentoFilmeComponent } from './detalhamento-filme.component';

describe('DetalhamentoFilmeComponent', () => {
  let component: DetalhamentoFilmeComponent;
  let fixture: ComponentFixture<DetalhamentoFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhamentoFilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhamentoFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
