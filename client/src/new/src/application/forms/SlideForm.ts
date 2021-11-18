import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SlideForm {
  @Expose()
  public text?: string;

  @Expose()
  public textColor?: string;

  @Expose()
  public textPosition?: string;

  @Expose()
  public buttonText?: string;

  @Expose()
  public buttonColor?: string;

  @Expose()
  public smallScreenImageUrl?: string;

  @Expose()
  public largeScrennImageUrl?: string;
}
