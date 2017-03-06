---
type: post
title: "Automatically deploy Middleman with Codeship to a VPS"
summary: "Here's a short guide for how I do it for my website."
---

[$2.50 for a 512MB RAM VPS](https://www.vultr.com/news/The-Vultr-Cloud-Is-More-Powerful-Than-Ever/) got me leaving Digital Ocean for Vultr. That's more than enough for my small amount of Middleman-made static files, with Cloudflare sitting in front serving most of the traffic through their CDN.

While moving to my new home I realised that I could share how I deploy this thing.

## Preparations

▶︎ Have a repo. [Here's mine](https://github.com/persand/helloper.com).

▶︎ Sign up for [Codeship](https://www.codeship.com). They have a [free plan](https://codeship.com/pricing) with some limitations on the amount of builds per month. But if your repo is open then you're always having free lunches with no limits.

▶︎ Create a user on your VPS for Codeship. Don't use root.

## Go time!

▶︎ [Create a new Codeship project](https://app.codeship.com/projects/new)

▶︎ Connect with your SCM (they support GitHub, Bitbucket and GitLab).

▶︎ Pick your repo and branch. 

▶︎ Under "Configure your tests", pick "I want to create my own custom commands" and enter this:

```bash
rvm use 2.3.1 --install
npm install
gulp install
gulp build
```

Please peek inside my [gulpfile.js](https://github.com/persand/helloper.com/blob/master/gulpfile.js) to see what's going on here.

▶︎ Carry on to the "Deployment Pipelines" settings. Pick "Custom Script" and enter your modified version of this:

```
rsync -avz -e "ssh" ./build/ your_user@your_ip_address:/var/www/example.com/html --delete-before
```

▶︎ Almost there! Now add the SSH public key for that Codeship project to your user so it can access your VPS. You'll find it under "Settings > General".

**That's it!**

If you need help setting up the VPS I recommend these great guides from Digital Ocean:

[Initial Server Setup with Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04)

[How To Install Nginx on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04)

[How To Set Up Nginx Server Blocks (Virtual Hosts) on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04)
