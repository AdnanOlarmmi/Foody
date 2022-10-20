import commentMock from '../__mock__/commentCounter.js';
import commentData from '../__mock__/commentData.js';

describe('Testing comment counter function', () => {
  it('Should return the correct number of comments', () => {
      const count = commentMock(commentData);
      expect(count).toBe(4);
  });

  it('Comment length should be greater than 0', () => {
    const counter = 0;

    const count = commentMock(commentData);
    expect(count).toBeGreaterThan(counter);
    })
})