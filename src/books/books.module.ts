import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { LibrariesService } from 'src/libraries/libraries.service';

@Module({
  providers: [BooksService, BooksResolver, LibrariesService]
})
export class BooksModule {}
