import { Component, OnInit } from '@angular/core';
import { PostsService } from "../posts.service";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent implements OnInit {
  posts:any;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getLatestPosts().subscribe(
      (data) => {
        this.posts = data.articles
        .filter((article: { author: string | null; urlToImage: string | null }) => article.author && article.urlToImage)
        .slice(0, 30);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  

  reactionCount(publishedAt: string): { comments: number, likes: number } {
    const dateTime = new Date(publishedAt);
    const comments = dateTime.getMonth() + dateTime.getDate() + dateTime.getHours() + dateTime.getMinutes();
    const likes = comments * 13;
    return { comments, likes };
  }

  shareOptions(article: any) {
    article.showOptions = !article.showOptions;
  }

  likeButton(article: any) {
    article.isLiked = !article.isLiked;
  }

  bookmarkButton(article: any) {
    article.isSaved = !article.isSaved;
  }

  fullDescription(article: any) {
    article.showMore = true;
  }

  fullComment(article: any) {
    article.showComment = true;
  }
}
