import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(waitForAsync(()=>{
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: []
    }).compileComponents();

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ]
    }).createComponent(AppComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add two numbers correctly', () => {
    // Arrange
    const num1InputElement: HTMLInputElement = fixture.nativeElement.querySelector('#num1');
    const num2InputElement: HTMLInputElement = fixture.nativeElement.querySelector('#num2');
    const calcButton: HTMLButtonElement = fixture.nativeElement.querySelector('#calc');
    const resultInputElement: HTMLInputElement = fixture.nativeElement.querySelector('#result');

    // Act
    num1InputElement.value = '2';
    num2InputElement.value = '3';
    num1InputElement.dispatchEvent(new Event('input'));
    num2InputElement.dispatchEvent(new Event('input'));
    calcButton.click();
    fixture.detectChanges();

    // Assert
    expect(parseFloat(resultInputElement.value)).toEqual(5);
  });

  it('should handle invalid inputs', () => {
    // Arrange
    const num1InputElement: HTMLInputElement = fixture.nativeElement.querySelector('#num1');
    const num2InputElement: HTMLInputElement = fixture.nativeElement.querySelector('#num2');
    const calcButton: HTMLButtonElement = fixture.nativeElement.querySelector('#calc');
    const resultInputElement: HTMLInputElement = fixture.nativeElement.querySelector('#result');

    // Act
    num1InputElement.value = '2';
    num2InputElement.value = 'abc'; // Invalid input
    num1InputElement.dispatchEvent(new Event('input'));
    num2InputElement.dispatchEvent(new Event('input'));
    calcButton.click();
    fixture.detectChanges();

    // Assert
    expect(resultInputElement.value).toBe('NaN');
  });
});
