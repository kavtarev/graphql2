import { Exclude, Expose, Type } from 'class-transformer'
import { ArrayNotEmpty, IsNotEmpty, IsString, IsUrl, ValidateNested } from 'class-validator'
import { ErrorMessages } from '../../components/validation/ErrorMessages'

@Exclude()
export class SlideType {
    @Expose()
    @IsString({ message: ErrorMessages.isString() })
    @IsNotEmpty({ message: ErrorMessages.isNotEmpty() })
    public text!: string

    @Expose()
    @IsString({ message: ErrorMessages.isString() })
    @IsNotEmpty({ message: ErrorMessages.isNotEmpty() })
    public textColor!: string

    @Expose()
    @IsString({ message: ErrorMessages.isString() })
    @IsNotEmpty({ message: ErrorMessages.isNotEmpty() })
    public textPosition!: string

    @Expose()
    @IsString({ message: ErrorMessages.isString() })
    @IsNotEmpty({ message: ErrorMessages.isNotEmpty() })
    public buttonText!: string

    @Expose()
    @IsString({ message: ErrorMessages.isString() })
    @IsNotEmpty({ message: ErrorMessages.isNotEmpty() })
    public buttonColor!: string

    @Expose()
    @IsNotEmpty({ message: ErrorMessages.isNotEmpty() })
    @IsUrl({}, { message: ErrorMessages.isUrl() })
    public smallScreenImageUrl!: string

    @Expose()
    @IsNotEmpty({ message: ErrorMessages.isNotEmpty() })
    @IsUrl({}, { message: ErrorMessages.isUrl() })
    public largeScreenImageUrl!: string
}

@Exclude()
export class SlideForm {
    @Expose()
    @ArrayNotEmpty()
    @Type(() => SlideType)
    @ValidateNested({ each: true })
    public slide!: SlideType[]
}
/* 144x43 138x103 */
