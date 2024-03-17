import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePerguntasComponent } from './page-perguntas.component';

describe('PagePerguntasComponent', () => {
  let component: PagePerguntasComponent;
  let fixture: ComponentFixture<PagePerguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePerguntasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagePerguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
