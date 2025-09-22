import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesSectionComponent } from './services-section.component';

describe('ServicesSectionComponent', () => {
  let component: ServicesSectionComponent;
  let fixture: ComponentFixture<ServicesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesSectionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the section element', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('section.services')).toBeTruthy();
  });
});
