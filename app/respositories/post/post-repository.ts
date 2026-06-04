import { PostModel } from "@/app/models/post/post-model";

export interface PostRepository {
  findAll(): Promise<PostModel[]>;
  // findById(id: string): Promise<PostModel | null>;
  // create(post: PostModel): Promise<PostModel>;
  // update(post: PostModel): Promise<PostModel>;
  // delete(id: string): Promise<void>;
}
