from __future__ import with_statement

import os.path

from fabric.api import *
from fabric.contrib.project import *

env.user = 'root'
env.hosts = ['146.185.132.96']
env.remote_dir = '/mnt/persist/www/helloper.com'

def deploy(where=None):
  rsync_project(
    env.remote_dir,
    'dist/',
    ['.git', '.git*', '.DS_Store', '.sass-cache*'],
    True
  )
