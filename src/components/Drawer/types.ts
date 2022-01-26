export type IObjectOptionsDrawer = {
    text: string,
    redirectTo: string
    icon?: JSX.Element
}

export interface IOptionsDrawer {
    options: IObjectOptionsDrawer[]
}