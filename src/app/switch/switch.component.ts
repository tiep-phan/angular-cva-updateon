import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ]
})
export class SwitchComponent implements ControlValueAccessor {

  private onChangeFn = (value: boolean) => {};

  private _value: boolean;

  private _disabled: boolean;

  @Input()
  get value() {
    return this._value;
  }

  set value(val) {
    this._value = !!val;
    this.onChangeFn(this._value);
  }

  get disabled() {
    return this._disabled;
  }

  onChange(value) {
    this.value = value;
  }

  writeValue(value: any): void {
    this._value = !!value;
  }
  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
    this._disabled = !!isDisabled;
  }

}
