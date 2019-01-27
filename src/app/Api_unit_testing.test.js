import { ListUsers, PostbyUsers, AlbumsbyUsers, CommentbyPosts } from './configs/config';
import regeneratorRuntime from "regenerator-runtime";
import "isomorphic-fetch";

/**
 * Unit Testing Api list Users
 */
test('Test List Users',() => {
    return ListUsers().then(data => {
    //   console.log(data);
      expect(data).toBe(data);    
    });
});

test('Asynchronous Test List Users', async () => {
    // console.log(await expect(ListUsers()).resolves)
    await expect(ListUsers()).resolves;
});
/**
 * Unit Testing Api list Users
 */


 /**
 * Unit Testing Api Post By Users
 */
test('Test Post by User ',() => {
    return PostbyUsers(10).then(data => {
    //   console.log(data);
      expect(data).toBe(data);    
    });
});

test('Asynchronous Test Post by User', async () => {
    // console.log(await expect(PostbyUsers(1)).resolves)
    await expect(PostbyUsers(1)).resolves;
});
/**
 * Unit Testing Api Post By Users
 */


  /**
 * Unit Testing Api Albums By Users
 */
test('Test Albums by User ',() => {
    return AlbumsbyUsers(10).then(data => {
    //   console.log(data);
      expect(data).toBe(data);    
    });
});

test('Asynchronous Test Albums by User', async () => {
    // console.log(await expect(PostbyUsers(1)).resolves)
    await expect(AlbumsbyUsers(1)).resolves;
});
/**
 * Unit Testing Api Albums By Users
 */

   /**
 * Unit Testing Api Albums By Users
 */
test('Test Comment by Post ',() => {
    return CommentbyPosts(10).then(data => {
    //   console.log(data);
      expect(data).toBe(data);    
    });
});

test('Asynchronous Test Comment by Post', async () => {
    // console.log(await expect(CommentbyPosts(1)).resolves)
    await expect(CommentbyPosts(1)).resolves;
});
/**
 * Unit Testing Api Albums By Users
 */
