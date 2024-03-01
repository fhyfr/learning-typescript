describe('greetings', () => {
  it('should return "Hello, World!"', () => {
    const greetings = () => 'Hello, World!';

    expect(greetings()).toBe('Hello, World!');
  });
});