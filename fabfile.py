from __future__ import with_statement

import os.path

from fabric.api import *
from fabric.contrib.project import *

env.user = 'root'
env.hosts = ['178.62.81.229']
env.remote_dir = '/var/www/helloper.com'

def deploy(where=None):
  rsync_project(
    env.remote_dir,
    'build/',
    ['.git', '.git*', '.DS_Store', '.sass-cache*'],
    True
  )
