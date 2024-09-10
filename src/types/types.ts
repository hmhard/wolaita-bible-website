export interface Book{
    id: number;
    name: string;
    created_at: string;
    updated_at: string; 
    previous_id: number;
    next_id: number;
    testament_id: number;
    testament: Testament;
  }
export interface Testament{
    id: number;
    name: string;
    created_at?: string;
    updated_at?: string; 
  }
  export interface Chapter{
    id: number;
    bible_id: number;
    chapter_id: number;
    created_at: string;
    updated_at: string; 
    book: Book;
  }
    export interface BookContent{
    id: number;
    verse: string;
    text: string;
  }
