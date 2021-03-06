/**
 * Dummy utility class to demonstrate a basic JS
 * structure and assoiciated test
 * @param {Object} params - containing:
 * @param {String} homePagePath - the pathname of the homepage (defaults to '/')
 * @param {String} articlePage
 */
class Utils {
	constructor(params) {
		this.params = Object.assign({
			homePagePath: '/',
			articlePage: '/einstein-and-churchill-both-took-daily-naps',
		}, params);
	}

	/**
	 * Is the user on the hompage
	 * @return {Boolean}
	 */
	isHomePage() {
		return document.location.pathname === this.params.homePagePath;
	}
	/**
	 * Is the user on the article
	 * @return {Boolean}
	 */
	isArticlePage() {
		return document.location.pathname === this.params.articlePage;
	}
}

module.exports = Utils;
