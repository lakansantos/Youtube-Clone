const PagesFooter = () => {

    const firstGroupLinks = ['About', 'Press', 'Copyright', 'Contact us', 'Creators', 'Advertise', 'Developers']
    const secondGroupLinks = ['Terms', 'Privacy', 'Policy & Safety', 'How Youtube Works', 'Test new features']
    return (
        <footer>
            <div className="footer-links-container container-1">
                <ul>
                    {firstGroupLinks.map((link, index) => {
                        return (
                            <li key={index} className="footer-links">
                                <a href="">{link}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="footer-links-container container-2">
                <ul>
                    {secondGroupLinks.map((link, index) => {
                        return (
                            <li key={index} className="footer-links">
                                <a href="">{link}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </footer>
    )
}

export default PagesFooter;