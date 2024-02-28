import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCarrinhoComponent } from './page-carrinho.component';

describe('PageCarrinhoComponent', () => {
  let component: PageCarrinhoComponent;
  let fixture: ComponentFixture<PageCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCarrinhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
