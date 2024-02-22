import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addPrefix'
})
export class AddPrefixPipe implements PipeTransform {

  transform(value: any, prefix: string): any {
    if (value == null) {
        return value;
    }
    if (value instanceof String && !value.trim()) {
        return value;
    }

    return prefix + value;
}

}
