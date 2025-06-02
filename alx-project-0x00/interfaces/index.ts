export interface PillProps {
  title: string
}
export type  TitleVariants =  'first' | 'second' | 'last';
export type  StyleVariants =  'rounded-sm'|'rounded-md'|'rounded-lg';  

export interface ButtonProps {
    title: TitleVariants,
    styles: StyleVariants,
}
