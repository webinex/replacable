export const guard = {
  notNull(value: any, name: string) {
    if (value == null) {
      throw new Error(`\`${name}\` might not be null.`);
    }

    return value;
  }
}