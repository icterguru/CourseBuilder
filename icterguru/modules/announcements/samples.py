# Copyright 2012 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS-IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Sample announcements."""

__author__ = 'Pavel Simakov (psimakov@google.com)'

import datetime


SAMPLE_ANNOUNCEMENT_1 = {
    'edit_url': None,
    'title': 'Thank you',
    'date': datetime.date(2014, 3, 16),
    'is_draft': False,
    'html': """
        <br>Thank you for registering with ICTERGuru.<br>
        <br>To visit your profile, please visit the
        <a href="student/home">"My profile"</a> page!</p>
        """}

SAMPLE_ANNOUNCEMENT_2 = {
    'edit_url': None,
    'title': 'Welcome to ICTERGuru',
    'date': datetime.date(2014, 3, 15),
    'is_draft': True,
    'html': """
        <br>Welcome to the ICTERGuru final class! <a href="class?class=6"> Class 6</a>
        focuses on combining the skills you have learned throughout the class
        to maximize the effectiveness of your searches.
        <br>
        <br><b>Do you want to know about ICTERGuru??</b>
        <br>You can customize your experience in several ways:
        <ul>
          <li>Please visit: <a href="http://icterguru.appspot.com/"> </li>
          <li>You can visit at: <a href="http://icterguru.wordpress.com/"> </li>
          <li>Please Like ICTERGuru on Facebook at: <a href="http://www.facebook.com/ICTERGuru"></li>
          <li>You can contact us at: icterguru@gmail.com </li>
        </ul>

        <br><b>ICTER Forum</b>
        <br>Apply your skills, share with others, and connect with your peers
        and course staff in the <a href="forum">forum.</a> Discuss your favorite
        search tips and troubleshoot technical issues. We'll also post bonus
        videos and challenges there!

        <p> </p>
        <p>For an updated page, please visit us later.</p>
        """}

SAMPLE_ANNOUNCEMENTS = [SAMPLE_ANNOUNCEMENT_1, SAMPLE_ANNOUNCEMENT_2]
