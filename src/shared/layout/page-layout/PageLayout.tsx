import PageLayoutStyles from './PageLayout.module.css'


interface IPageLayoutProps {
    children: React.ReactNode;
    title: string;
}



export const PageLayout = ({ children, title }: IPageLayoutProps) => {
    return (
        <div className={PageLayoutStyles.PageLayoutContainer}>
            <div className={PageLayoutStyles.PageContent}>
                <div>
                    <h1>{title}</h1>
                </div>

                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}