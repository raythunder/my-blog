import siteConfig from "./src/utils/config";

const config = siteConfig({
	title: "Raythunder",
	prologue: "所有事到最后都是好事\n 如果还不是\n那还没到最后",
	author: {
		name: "Raythunder",
		email: "raythunder@163.com",
		link: "https://raythunder.cn"
	},
	description: "Raythunder's blog",
	copyright: {
		type: "CC BY-NC-ND 4.0",
		year: "2026"
	},
	i18n: {
		locales: ["zh-cn"],
		defaultLocale: "zh-cn"
	},
	feed: {
		section: "*",
		limit: 20
	},
	latest: "*"
});

export const monolocale = Number(config.i18n.locales.length) === 1;

export default config;
