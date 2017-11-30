# RP_LRFAQ
[![Current Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/CityofToronto/RP_LRFAQ)
![node v7](https://img.shields.io/npm/v/@cycle/core.svg)

Lobbyist City of Toronto web apps.

**Do I Need to Register as a Lobbyist? Answer this quick and easy interactive questionnaire to find out**



Getting Started
===============
1. Make sure that [npm](https://nodejs.org/en) is installed on your computer. It is best that you have the latest version installed. Otherwise you may run into issues.
2. Make sure that [git](https://git-scm.com/downloads) is installed on your computer. It is best that you have the latest version installed. Otherwise you may run into issues below.
3. Make sure that your git installation is set up to [cache your github password in git](https://help.github.com/articles/caching-your-github-password-in-git/)
4. Make sure you are set up to work on the [city's proxy](https://github.com/CityofToronto/corejs/blob/master/docs/cot_proxy_settings.md).
5. Install bower globally by running this on your terminal:

`npm install -g bower`

6. Clone RP_LRFAQ to your local machine:

`cd /path_to/some_working_directory && git https://github.com/CityofToronto/city_clerks_btp.git`

7. Install the core npm packages:

`npm install`

8. Install the bower packages:

`bower install`

5. At this point, you should be able to use gulp tasks to build and run your project:

`gulp run`



For embedded apps:
------------------
This app can be embedded on COT Wordpress pages with:

`[cot_app app="RP_LRFAQ"][/cot_app]`

Here is the application.json definition

`{"id": "RP_LRFAQ", "title": "Lobbyist FAQ", "description": "this quick and easy interactive questionnaire"}`
