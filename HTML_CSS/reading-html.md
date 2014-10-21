<!--examples of html we find-->


###Block Level Elements

####1) ``<p>``
* represents a paragraph of text. Until you start a new <p> tag,
there will not be a line break. Because paragraphs.

  Examples:

  [1] ``<p>You can find more information on our Meetup page: </p>``   (view-source:http://orlando.theironyard.com/)

  [2] ``<p>At 6pm tomorrow, The Iron Yard Orlando will be hosting Matt Wallaert, Behavioral Scientist @ Bing, as he speaks
  at an Orlando Tech Meetup in our space here at 101&#160;S. Garland Ave. This is a great opportunity to meet him and
  ask questions, and I hope you&#8217;ll join us! </p>``     (view-source:http://orlando.theironyard.com/)

  [3] ``<p>Hi everyone! This is my first official communication as the Campus Director at The Iron Yard Orlando, and I’m
  excited to let everyone know that I’m transitioning onto the team here over the next week. </p>`` (view-source:http://orlando.theironyard.com/)

####2) ``<h1>, <h2>, <h3>, <h4>, <h5>, <h6>``
* varying levels of headers. h1 is
the largest, h6 the smallest. You can use them to make title-looking things.

  Examples:

  [1] ``<h2>Search</h2>`` (view-source:http://orlando.theironyard.com/)

  [2] ``<h1>
        <a href="/">The Iron Yard | Orlando</a>
      </h1>`` (view-source:http://orlando.theironyard.com/)

  [3] ``<h2>Elsewhere</h2>`` (view-source:http://orlando.theironyard.com/)


####3) ``<div>``
* Separates and contains content. Super generic and is evidently
only used when no other element/tag is appropriate.

  Examples:

    [1] ``<div class="wrap"></div>`` (view-source:http://orlando.theironyard.com/)

    [2] ``<div class="details">
                            <a class="timestamp" href="http://orlando.theironyard.com/post/100189034319/matt-wallaert-behavioral-scientist-bing-will-be">4 days ago</a></div>``
                (view-source:http://orlando.theironyard.com/)  

    [3] ``<div class="blog-description">Happenings and updates from The Iron Yard in Orlando, FL.</div>``
                (view-source:http://orlando.theironyard.com/)  

####4) ``<blockquote>``
* Indicates the text within these tags is a quotation.
Visually, it renders with some slight indentation (which can be changed...).

  Examples:

  [1]``<blockquote>
<p><em>See? Super excited. And it’s an official picture, because David is in it too (albeit without his actual knowledge)</em></p>
</blockquote>`` (view-source:http://orlando.theironyard.com/)

  [2]``<blockquote>
<p><span>Together, The Iron Yard and Code School are preparing the next generation of developers, filling the already overwhelming demand for tech talent in the Orlando market and beyond. This is a tremendous opportunity to make a potentially life-changing career move.</span></p>
<p><span>&#8212; </span><a href="http://al-the-x.me/" target="_blank"><span>David Rogers</span></a><span>, </span><span><a href="http://theironyard.com/about/team/#david-rogers" target="_blank">Front End Instructor, The Iron Yard Orlando</a></span></p>
</blockquote>`` (view-source:http://orlando.theironyard.com/)

  [3]``<blockquote>
Is Iron Yard Academy Worth The Investment?
</blockquote>`` (view-source:http://blog.theironyard.com/)



####5) ``<article>``
* represents a self-contained block of text in a document, page, app, or site, which is intended
to be distributable or reusable outside the realm of the web page. Oftentimes the tag literally refers
to an article, but it can be a blog entry, a widget, or any other independent item of content.

  Examples:

  [1]``        <article class="post type-text" id="100079465824"><div class="clearfix rte">
                            <h1 class="title">
                                  <a href="http://orlando.theironyard.com/post/100079465824/new-face-at-the-iron-yard-orlando">New Face at The Iron Yard Orlando!</a></h1>
<p><em>By Susanna Miller, Campus Director</em></p>
<p>Hi everyone! This is my first official communication as the Campus Director at The Iron Yard Orlando, and I’m excited to let everyone know that I’m transitioning onto the team here over the next week. </p>
<p><img alt="image" src="https://31.media.tumblr.com/d3d0f8f992dc15b685f6677202a45c6e/tumblr_inline_ndhpy816T71t311sy.jpg"></p>
<blockquote>
<p><em>See? Super excited. And it’s an official picture, because David is in it too (albeit without his actual knowledge)</em></p>
</blockquote>
<p></p>
<p class="read_more_container"><a href="http://orlando.theironyard.com/post/100079465824/new-face-at-the-iron-yard-orlando" class="read_more">Read More</a></p></div><aside class="metadata clearfix">
                          <ul class="meta-tools clearfix">
                            <li class="like"><div class="like_button" data-post-id="100079465824" id="like_button_100079465824"><iframe id="like_iframe_100079465824" src="http://assets.tumblr.com/assets/html/like_iframe.html?_v=eec83bdba6047aaffe0aea2a68f975cb#name=tiyorlando&amp;post_id=100079465824&amp;color=grey&amp;rk=LV3ksh0Z" scrolling="no" width="16" height="16" frameborder="0" class="like_toggle" allowTransparency="true"></iframe></div></li>
                            <li class="reblog"><a href="https://www.tumblr.com/reblog/100079465824/LV3ksh0Z" class="reblog_button"style="display: block;width:16px;height:16px;"><svg width="100%" height="100%" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ccc"><path d="M5.01092527,5.99908429 L16.0088498,5.99908429 L16.136,9.508 L20.836,4.752 L16.136,0.083 L16.1360004,3.01110845 L2.09985349,3.01110845 C1.50585349,3.01110845 0.979248041,3.44726568 0.979248041,4.45007306 L0.979248041,10.9999998 L3.98376463,8.30993634 L3.98376463,6.89801007 C3.98376463,6.20867902 4.71892527,5.99908429 5.01092527,5.99908429 Z"></path><path d="M17.1420002,13.2800293 C17.1420002,13.5720293 17.022957,14.0490723 16.730957,14.0490723 L4.92919922,14.0490723 L4.92919922,11 L0.5,15.806 L4.92919922,20.5103758 L5.00469971,16.9990234 L18.9700928,16.9990234 C19.5640928,16.9990234 19.9453125,16.4010001 19.9453125,15.8060001 L19.9453125,9.5324707 L17.142,12.203"></path></svg></a></li>
                            <li class="share">
                              <span class="icon">2</span>
                              <div class="pop-up-wrap">
                                <div class="pop-up">
                                  <ul class="share-items">
                                    <li class="share-item twitter">
                                      <a href="https://twitter.com/intent/tweet?url=http://orlando.theironyard.com/post/100079465824/new-face-at-the-iron-yard-orlando" target="_blank">Twitter<span class="icon">t</span></a>
                                    </li>
                                    <li class="share-item facebook">
                                      <a href="https://www.facebook.com/sharer.php?u=http://orlando.theironyard.com/post/100079465824/new-face-at-the-iron-yard-orlando" target="_blank">Facebook<span class="icon">f</span></a>
                                    </li>
                                    <li class="share-item pinterest">
                                      <a href="#" target="_blank">Pinterest<span class="icon">p</span></a>
                                    </li>
                                    <li class="share-item google">
                                      <a href="https://plus.google.com/share?url=http://orlando.theironyard.com/post/100079465824/new-face-at-the-iron-yard-orlando" target="_blank">Google<span class="icon">g</span></a>
                                    </li>
                                  </ul>
                                  <div class="copy-link-wrap">
                                    <a data-clipboard-text="http://tmblr.co/ZRA0zm1TDCtLW"><span class="icon">5</span><span class="label">Copy short URL</span></a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div class="details">
                            <a class="timestamp" href="http://orlando.theironyard.com/post/100079465824/new-face-at-the-iron-yard-orlando">6 days ago</a></div>
                        </aside></article>`` This is an article.(view-source:http://orlando.theironyard.com/)

  [2]``<article class="post type-text" id="98822138374"><div class="clearfix rte">
                            <h1 class="title">
                                  <a href="http://orlando.theironyard.com/post/98822138374/welcome-to-week-2">Welcome to Week 2</a></h1><p><em>By Sarah Elbadri, Campus Director</em></p>
<p>We are officially in Week 2 at The Iron Yard! Very quickly, our students have demonstrated how much they can absorb and create in such a short time. So far they&#8217;ve been heavily exposed to Git and Github, Jekyll, and Cloud 9, and over the weekend built their blogs on Github Pages. As a campus they&#8217;ve also been using tools like Basecamp and HipChat, as well as practicing agile methodologies to communicate progress on their projects.</p>
<p>On Friday, we kicked off our guest lecture series with <a href="http://olivierlacan.com/about/">Olivier Lacan</a> from Code School, who showed our students how Code School uses Github internally and demonstrated a couple neat <a href="http://olivierlacan.com/tools/">tools</a> that he uses to improve his workflow. </p>
<p><img src="http://media.tumblr.com/805cd883f4122aaaaaab2589c11d66d5/tumblr_inline_ncpzt8sS1E1t0hk69.png"/></p>

<p>This week our students are jumping into JavaScript! As a primer our students watched a great talk by Gary Bernhardt called the <em><a href="https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript">The Birth and Death of JavaScript</a> </em>during lunch on yesterday. I&#8217;m pretty sure they&#8217;ll be calling it YavaScript on and off for the next 11 weeks.</p></div><aside class="metadata clearfix">
                          <ul class="meta-tools clearfix">
                            <li class="like"><div class="like_button" data-post-id="98822138374" id="like_button_98822138374"><iframe id="like_iframe_98822138374" src="http://assets.tumblr.com/assets/html/like_iframe.html?_v=eec83bdba6047aaffe0aea2a68f975cb#name=tiyorlando&amp;post_id=98822138374&amp;color=grey&amp;rk=lYHH9850" scrolling="no" width="16" height="16" frameborder="0" class="like_toggle" allowTransparency="true"></iframe></div></li>
                            <li class="reblog"><a href="https://www.tumblr.com/reblog/98822138374/lYHH9850" class="reblog_button"style="display: block;width:16px;height:16px;"><svg width="100%" height="100%" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ccc"><path d="M5.01092527,5.99908429 L16.0088498,5.99908429 L16.136,9.508 L20.836,4.752 L16.136,0.083 L16.1360004,3.01110845 L2.09985349,3.01110845 C1.50585349,3.01110845 0.979248041,3.44726568 0.979248041,4.45007306 L0.979248041,10.9999998 L3.98376463,8.30993634 L3.98376463,6.89801007 C3.98376463,6.20867902 4.71892527,5.99908429 5.01092527,5.99908429 Z"></path><path d="M17.1420002,13.2800293 C17.1420002,13.5720293 17.022957,14.0490723 16.730957,14.0490723 L4.92919922,14.0490723 L4.92919922,11 L0.5,15.806 L4.92919922,20.5103758 L5.00469971,16.9990234 L18.9700928,16.9990234 C19.5640928,16.9990234 19.9453125,16.4010001 19.9453125,15.8060001 L19.9453125,9.5324707 L17.142,12.203"></path></svg></a></li>
                            <li class="share">
                              <span class="icon">2</span>
                              <div class="pop-up-wrap">
                                <div class="pop-up">
                                  <ul class="share-items">
                                    <li class="share-item twitter">
                                      <a href="https://twitter.com/intent/tweet?url=http://orlando.theironyard.com/post/98822138374/welcome-to-week-2" target="_blank">Twitter<span class="icon">t</span></a>
                                    </li>
                                    <li class="share-item facebook">
                                      <a href="https://www.facebook.com/sharer.php?u=http://orlando.theironyard.com/post/98822138374/welcome-to-week-2" target="_blank">Facebook<span class="icon">f</span></a>
                                    </li>
                                    <li class="share-item pinterest">
                                      <a href="#" target="_blank">Pinterest<span class="icon">p</span></a>
                                    </li>
                                    <li class="share-item google">
                                      <a href="https://plus.google.com/share?url=http://orlando.theironyard.com/post/98822138374/welcome-to-week-2" target="_blank">Google<span class="icon">g</span></a>
                                    </li>
                                  </ul>
                                  <div class="copy-link-wrap">
                                    <a data-clipboard-text="http://tmblr.co/ZRA0zm1S2GYe6"><span class="icon">5</span><span class="label">Copy short URL</span></a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div class="details">
                            <a class="timestamp" href="http://orlando.theironyard.com/post/98822138374/welcome-to-week-2">2 weeks ago</a></div>
                        </aside></article>


                        (view-source:http://orlando.theironyard.com/)


  [3]``<article class="post type-text" id="100189034319"><div class="clearfix rte">
                            <h1 class="title">
                                  <a href="http://orlando.theironyard.com/post/100189034319/matt-wallaert-behavioral-scientist-bing-will-be">Matt Wallaert, Behavioral Scientist @ Bing, Will be Here Tomorrow!</a></h1><p><em>By Susanna Miller, Campus Director</em></p>
<p>At 6pm tomorrow, The Iron Yard Orlando will be hosting Matt Wallaert, Behavioral Scientist @ Bing, as he speaks at an Orlando Tech Meetup in our space here at 101&#160;S. Garland Ave. This is a great opportunity to meet him and ask questions, and I hope you&#8217;ll join us! </p>
<p>You can find more information on our Meetup page: </p>
<p><a href="http://www.meetup.com/The-Iron-Yard-Orlando/">http://www.meetup.com/The-Iron-Yard-Orlando/</a></p>
<p>See you then!</p>
<p><img alt="image" src="http://media.tumblr.com/c5b6fcd73c1e6a076269eb477b09c379/tumblr_inline_ndk4rsMem41t311sy.jpg"/></p></div><aside class="metadata clearfix">
                          <ul class="meta-tools clearfix">
                            <li class="like"><div class="like_button" data-post-id="100189034319" id="like_button_100189034319"><iframe id="like_iframe_100189034319" src="http://assets.tumblr.com/assets/html/like_iframe.html?_v=eec83bdba6047aaffe0aea2a68f975cb#name=tiyorlando&amp;post_id=100189034319&amp;color=grey&amp;rk=hKWAw8Ht" scrolling="no" width="16" height="16" frameborder="0" class="like_toggle" allowTransparency="true"></iframe></div></li>
                            <li class="reblog"><a href="https://www.tumblr.com/reblog/100189034319/hKWAw8Ht" class="reblog_button"style="display: block;width:16px;height:16px;"><svg width="100%" height="100%" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ccc"><path d="M5.01092527,5.99908429 L16.0088498,5.99908429 L16.136,9.508 L20.836,4.752 L16.136,0.083 L16.1360004,3.01110845 L2.09985349,3.01110845 C1.50585349,3.01110845 0.979248041,3.44726568 0.979248041,4.45007306 L0.979248041,10.9999998 L3.98376463,8.30993634 L3.98376463,6.89801007 C3.98376463,6.20867902 4.71892527,5.99908429 5.01092527,5.99908429 Z"></path><path d="M17.1420002,13.2800293 C17.1420002,13.5720293 17.022957,14.0490723 16.730957,14.0490723 L4.92919922,14.0490723 L4.92919922,11 L0.5,15.806 L4.92919922,20.5103758 L5.00469971,16.9990234 L18.9700928,16.9990234 C19.5640928,16.9990234 19.9453125,16.4010001 19.9453125,15.8060001 L19.9453125,9.5324707 L17.142,12.203"></path></svg></a></li>
                            <li class="share">
                              <span class="icon">2</span>
                              <div class="pop-up-wrap">
                                <div class="pop-up">
                                  <ul class="share-items">
                                    <li class="share-item twitter">
                                      <a href="https://twitter.com/intent/tweet?url=http://orlando.theironyard.com/post/100189034319/matt-wallaert-behavioral-scientist-bing-will-be" target="_blank">Twitter<span class="icon">t</span></a>
                                    </li>
                                    <li class="share-item facebook">
                                      <a href="https://www.facebook.com/sharer.php?u=http://orlando.theironyard.com/post/100189034319/matt-wallaert-behavioral-scientist-bing-will-be" target="_blank">Facebook<span class="icon">f</span></a>
                                    </li>
                                    <li class="share-item pinterest">
                                      <a href="#" target="_blank">Pinterest<span class="icon">p</span></a>
                                    </li>
                                    <li class="share-item google">
                                      <a href="https://plus.google.com/share?url=http://orlando.theironyard.com/post/100189034319/matt-wallaert-behavioral-scientist-bing-will-be" target="_blank">Google<span class="icon">g</span></a>
                                    </li>
                                  </ul>
                                  <div class="copy-link-wrap">
                                    <a data-clipboard-text="http://tmblr.co/ZRA0zm1TJkrTF"><span class="icon">5</span><span class="label">Copy short URL</span></a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div class="details">
                            <a class="timestamp" href="http://orlando.theironyard.com/post/100189034319/matt-wallaert-behavioral-scientist-bing-will-be">4 days ago</a></div>
                        </aside></article>``

                        (view-source:http://orlando.theironyard.com/)



####6) ``<ul>``
* Represents an unordered list of items. Listing things within
this tag will organize the list with bullets typically.

####7)``<form>``
* Represents a section with interactive buttons and stuff users
can control to submit information to a web server.

####8)``<header>``
* Kind of an organizing attribute, this block usually contains
items pertaining to the head of a website, logos, banners, nav bar, and
the like.

####9)``<footer>``
* Another organizing attribute, this block might have stuff
about the author of the site, contact info, links to related data, copyright
info, etc.

####10)``<aside>``
* Represents a section of the page that could be considered
separate from the brunt of the webpage content. Might contain nav bar(s),
related advertisements, author bio, other web apps, profile info, links
to other related pages, etc.
