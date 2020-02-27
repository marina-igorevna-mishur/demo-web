import content from './content'

describe('content', () => {
    it('should return correct content', () => {
        expect(content.getAppContent()).toBe('Hello world')
    })
})
