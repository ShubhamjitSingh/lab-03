const viewPath = ('pages');

exports.home = (req, res) => {
    res.render(`${viewPath}/home`,{
        pageTitle: 'Welome HOme'
    });
};

exports.about = (req, res) => {
    res.render(`${viewPath}/about`, {
        pageTitle: 'About Me'
    });
}