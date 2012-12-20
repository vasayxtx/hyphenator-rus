describe("Hyphenator", function() {
  it('hypernate functionality', function() {
    expect(hypernate('привет')).toBe('при&shy;вет');
  });
  it('hypernate functionality', function() {
    expect(hypernate('алгоритм')).toBe('ал&shy;го&shy;ритм');
  });
  it('hypernate functionality', function() {
    expect(hypernate('пока')).toBe('по&shy;ка');
  });
  it('hypernate functionality', function() {
    expect(hypernate('это')).toBe('это');
  });
  it('hypernate functionality', function() {
    expect(hypernate('автомобиль')).toBe('ав&shy;то&shy;мо&shy;биль');
  });
  it('hypernate functionality', function() {
    expect(hypernate('поэзия')).toBe('по&shy;э&shy;зия');
  });
  it('hypernate functionality', function() {
    expect(hypernate('а')).toBe('а');
  });
  it('hypernate functionality', function() {
    expect(hypernate('еж')).toBe('еж');
  });
  it('hypernate functionality', function() {
    expect(hypernate('йод')).toBe('йод');
  });
  it('hypernate functionality', function() {
    expect(hypernate('ёлка')).toBe('ёл&shy;ка');
  });
  it('hypernate functionality', function() {
    expect(hypernate('создание')).toBe('со&shy;зда&shy;ние');
  });
  it('hypernate functionality', function() {
    expect(hypernate('разработка')).toBe('раз&shy;ра&shy;бот&shy;ка');
  });
  it('hypernate functionality', function() {
    expect(hypernate('язык')).toBe('язык');
  });
});