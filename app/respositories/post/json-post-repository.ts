import { PostModel } from "@/app/models/post/post-model";
import { PostRepository } from "./post-repository";

export class JsonPostRepository implements PostRepository {
  findAll(): Promise<PostModel[]> {
    return Promise.resolve([]);
  }
}
