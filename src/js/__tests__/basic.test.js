import Character from '../basic';

test('Функция должна считать результат', () => {
  const unit = new Character('zombie', 'zombie').damage(30);
  expect(unit).toBe(82);
});

test('Функция должна считать результат', () => {
  const unit = new Character('zombie', 'zombie').damage(300);
  expect(unit).toBe(0);
});
