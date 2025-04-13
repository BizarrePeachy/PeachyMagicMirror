/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */


let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "imperial",

	modules: [
		{
			module: "alert",
			config: {
				welcome_message: "Welcome Gaybo",
				effect: "exploader"
			}
		},
		{
			module: "updatenotification",
			position: "top_center",
			config: {
				updateInterval: 60000,
				sendUpdatesNotifications: true,
			}
		},
		{
			module: "MMM-IronManGIF",
			position: "middle_center",
			config: {
				style: 7,
				maxWidth: "100%",
				rotate: false,
			}
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				timeFormat: 12,
				showPeriodUpper: true,
				showSunTimes: true,
			}
		},
		{
			module: "calendar",
			header: "Things happening",
			position: "top_left",
			config: {
				calendars: [
					{
						timeFormat: "dateheaders",
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/family09727604978895683682%40group.calendar.google.com/private-7fabd3da7b374c6f2b64d27db653af38/basic.ics"
					}
				]
			}
		},
		{
			module: "MMM-DailyPokemon",
			header: "Pokemon of the day",
			position: "top_left",
			config: {
				updateInterval: 15000,
				minPoke: 4,
				maxPoke: 1025,
				showType: true,
				language: "en",
				genera: true,
				gbaMode: true,
				nameSize: 15,
				flavorText: false,
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				tempUnits: "imperial",
				type: "current",
				lat: 38.917274,
				lon: -76.7252392
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				tempUnits: "imperial",
				type: "forecast",
				lat: 38.917274,
				lon: -76.7252392
			}
		},
		{
			module: "MMM-NFL",
			position: "top_right",
			header: "NFL STATS",
			config: {
				colored: true,
			}
		},
		{
			module: "compliments",
			position: "bottom_bar",
			config: {
				updateInterval: 10000,
				fadeSpeed: 3000,

				morningStartTime: 6,
				morningEndTime: 13,

				afternoonStartTime: 12,
				afternoonEndTime: 22
			}
		},
		{
			module: "MMM-JokeApi",
			position: "middle_center",
			config: {
				catagory: "Programming",
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
					}
				],
				showSourceTitle: true,
				prohibitedWords: ['Trump', 'Tariff', 'China'],
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
