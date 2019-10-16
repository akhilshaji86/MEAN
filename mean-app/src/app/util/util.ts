export class Utility {

  isNullOrUndefined(value: string) {

    return value == null || typeof value === "undefined" || value.match(/^ *$/) !== null;
  }

}
