import { getPosts } from "../Components/Post/getPosts"
import { getSum } from "./Counter"

test('test func getSum', () => {
    expect(getSum(1,2)).toBe(3)
})

const postsStabs = [{example: 'test'}]

describe('test async func getPosts', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue({results: postsStabs}),
        });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('get 2 posts', async () => {
        const posts = await getPosts({limit : 2});
        expect(posts).toBe(postsStabs)
    });

    it('get 3 posts', async () => {
        const posts = await getPosts({limit: 3});
        expect(posts).toBe(postsStabs)
    })
})