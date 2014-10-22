<!--examples of html we find-->


###Block Level Elements

####1) ``<p>``
* represents a paragraph of text. Until you start a new <p> tag,
there will not be a line break. Because paragraphs.

  Examples:
```html
  [1] <p>You can find more information on our Meetup page: </p>   (view-source:http://orlando.theironyard.com/)

  [2] <p>At 6pm tomorrow, The Iron Yard Orlando will be hosting Matt Wallaert, Behavioral Scientist @ Bing, as he speaks
  at an Orlando Tech Meetup in our space here at 101&#160;S. Garland Ave. This is a great opportunity to meet him and
  ask questions, and I hope you&#8217;ll join us! </p>    (view-source:http://orlando.theironyard.com/)

  [3] <p>Hi everyone! This is my first official communication as the Campus Director at The Iron Yard Orlando, and I’m
  excited to let everyone know that I’m transitioning onto the team here over the next week. </p> (view-source:http://orlando.theironyard.com/)
```
####2) ``<h1>, <h2>, <h3>, <h4>, <h5>, <h6>``
* varying levels of headers. h1 is
the largest, h6 the smallest. You can use them to make title-looking things.

  Examples:
```html
  [1] <h2>Search</h2> (view-source:http://orlando.theironyard.com/)

  [2] <h1>
        <a href="/">The Iron Yard | Orlando</a>
      </h1> (view-source:http://orlando.theironyard.com/)

  [3] <h2>Elsewhere</h2> (view-source:http://orlando.theironyard.com/)
```

####3) ``<div>``
* Separates and contains content. Super generic and is evidently
only used when no other element/tag is appropriate.

  Examples:
```html
    [1] <div class="wrap"></div> (view-source:http://orlando.theironyard.com/)

    [2] <div class="details">
                            <a class="timestamp" href="http://orlando.theironyard.com/post/100189034319/matt-wallaert-behavioral-scientist-bing-will-be">4 days ago</a></div>
                (view-source:http://orlando.theironyard.com/)  

    [3] <div class="blog-description">Happenings and updates from The Iron Yard in Orlando, FL.</div>
                (view-source:http://orlando.theironyard.com/)  
```
####4) ``<blockquote>``
* Indicates the text within these tags is a quotation.
Visually, it renders with some slight indentation (which can be changed...).

  Examples:
```html
  [1]<blockquote>
<p><em>See? Super excited. And it’s an official picture, because David is in it too (albeit without his actual knowledge)</em></p>
</blockquote> (view-source:http://orlando.theironyard.com/)

  [2]<blockquote>
<p><span>Together, The Iron Yard and Code School are preparing the next generation of developers, filling the already overwhelming demand for tech talent in the Orlando market and beyond. This is a tremendous opportunity to make a potentially life-changing career move.</span></p>
<p><span>&#8212; </span><a href="http://al-the-x.me/" target="_blank"><span>David Rogers</span></a><span>, </span><span><a href="http://theironyard.com/about/team/#david-rogers" target="_blank">Front End Instructor, The Iron Yard Orlando</a></span></p>
</blockquote> (view-source:http://orlando.theironyard.com/)

  [3]<blockquote>
Is Iron Yard Academy Worth The Investment?
</blockquote> (view-source:http://blog.theironyard.com/)
```


####5) ``<article>``
* represents a self-contained block of text in a document, page, app, or site, which is intended
to be distributable or reusable outside the realm of the web page. Oftentimes the tag literally refers
to an article, but it can be a blog entry, a widget, or any other independent item of content.

  Examples:
```html
  [1]        <article class="post type-text" id="100079465824"><div class="clearfix rte">
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
                        </aside></article> This is an article.(view-source:http://orlando.theironyard.com/)

  [2]<article class="post type-text" id="98822138374"><div class="clearfix rte">
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


  [3]<article class="post type-text" id="100189034319"><div class="clearfix rte">
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
                        </aside></article>

                        (view-source:http://orlando.theironyard.com/)

```

####6) ``<ul>``
* Represents an unordered list of items. Listing things within
this tag will organize the list with bullets typically.

  Examples:
```html
  [1] <ul class="share-items">
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

  (view-source:http://orlando.theironyard.com/)


  [2] <ul><li><span>What did you do yesterday?</span></li>
<li><span>What are you doing today?</span></li>
<li><span>What, if anything, is in your way?</span></li>
</ul>

  (view-source:http://orlando.theironyard.com/)


  [3]
  	                   <ul>
                        <li><a href="http://tsbmen.com/category/features">Editorials</a></li><br>
                        <li><a href="http://tsbmen.com/category/ask-dan">Tips &amp; Guides</a></li><br>
                        <li><a href="http://tsbmen.com/category/street-style">Street Style</a></li><br>
                        <li><a href="http://tsbmen.com/category/what-i-wore-today">WIWT</a></li><br>
                        <li><a href="http://tsbmen.com/category/behind-the-scenes">Behind the Scenes</a></li><br>
                        <li><a href="http://tsbmen.com/category/videos">Videos</a></li><br>
                        <li class="last"><a href="http://tsbmen.com/category/giveaways">Giveaways</a></li><br>
                       </ul>
        (view-source:http://tsbmen.com/)

```

####7)``<form>``
* Represents a section with interactive buttons and stuff users
can control to submit information to a web server.

```html

  [1]
  <form role="search" method="get" id="searchform" action="http://tsbmen.com/">
    <div class="searchbox">
        <input type="text" name="s" id="s" placeholder="Search" />
    </div>
</form>
          (view-source:http://tsbmen.com/)

  [2]
  <form action="http://TSBmen.us3.list-manage.com/subscribe/post?u=e33ac0aa81ee210a53a5b039b&amp;id=19c10d6e94" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" style="border: 1px solid #E5892A;float: none;height: 29px;margin: 148px 12.3% 0;text-align: center;width: 75%;" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;"><input type="text" name="b_e33ac0aa81ee210a53a5b039b_19c10d6e94" value=""></div>
	<div style="float:left; margin:15px 0 0; font:helvetica"><input type="submit" value="submit" name="subscribe" class="button"></div>
</form>
        (view-source:http://tsbmen.com/)


  [3]
            <form>
              <input type="text" id="st-search-input" class="search-field" />
            </form>
                      (view-source:http://orlando.theironyard.com/)

```

####8)``<header>``
* Kind of an organizing attribute, this block usually contains
items pertaining to the head of a website, logos, banners, nav bar, and
the like.

  Examples:
```html
  [1]
  <header style="background-image:url(http://static.tumblr.com/3c7cd96cde56779343d2e9a22afec085/w5gxxfv/oCrn8vkw8/tumblr_static_9cxjqqnfamsccsg4ow84sg8kg.jpg);"></header>
    (view-source:http://orlando.theironyard.com/)

  [2]
  <header class="entry-header">
						<h1 class="entry-title">
			<a href="http://john.do/bravo-inside/" title="Permalink to Chrome Bravo Backpack (What&#8217;s Inside)" rel="bookmark">Chrome Bravo Backpack (What&#8217;s Inside)</a>
		</h1>
	</header>
        (view-source:http://john.do/page/2/)

  [3]
  <header class="entry-header">
						<h1 class="entry-title">
			<a href="http://john.do/got-boring/" title="Permalink to I Got Boring" rel="bookmark">I Got Boring</a>
		</h1>
	</header>
        (view-source:http://john.do/page/2/)
```


####9)``<footer>``
* Another organizing attribute, this block might have stuff
about the author of the site, contact info, links to related data, copyright
info, etc.

  Examples:

```html
  [1]
    <footer>
    <div class="footer-wrap content-wrap clearfix">
      <aside class="sidebar">
        <div class="avatar-wrap">
          <a href="/"><img alt="The Iron Yard | Orlando" src="http://33.media.tumblr.com/avatar_31b8d8bf579d_64.png" /></a>
        </div>
      </aside>
      <div class="content">
        <h2 class="secondary-title">The Iron Yard | Orlando</h2>
        <div class="blog-description">Happenings and updates from The Iron Yard in Orlando, FL.</div><div class="social-icons module clearfix">
          <h2>Elsewhere</h2>
          <div class="wrap"></div>
        </div><div class="attribution">
          <a href="http://www.pixelunion.net/themes/longform">Longform Theme</a>&nbsp;by&nbsp;<a href="http://www.pixelunion.net">Pixel Union</a>. Powered by&nbsp;<a href="http://www.tumblr.com">Tumblr</a>.</div>
      </div>
    </div>
  </footer>
              (view-source:http://orlando.theironyard.com/)

  [2]
    <footer class="entry-meta">

							<span class="cat-links">in <a href="http://john.do/category/start/" rel="category tag">Start</a></span> <span class="sep"> |</span>

							<span>312 Words</span>


	</footer>
            (view-source:http://john.do/page/2/)



  [3]
          <footer class="row">
			<div class="row">

										<h4>Hey! You!</h4>
					<p>You should like, so test out this dynamic footer sidebar. Check it out in Appearance > Widgets!</p>

			</div>

	</footer>  
              (view-source:http://tsbmen.com/)
```

####10)``<aside>``
* Represents a section of the page that could be considered
separate from the brunt of the webpage content. Might contain nav bar(s),
related advertisements, author bio, other web apps, profile info, links
to other related pages, etc.

Examples:

```html
  [1]
     <aside class="sidebar"><div class="avatar-wrap">
        <a href="http://theironyard.com"><img alt="The Iron Yard | Orlando" src="http://static.tumblr.com/37ca133c1a84d5b7856c51a7682df3e9/w5gxxfv/6j4n8vkw8/tumblr_static_20mtuue2w17o0sksogs0c44cw.png" /></a>
      </div><h1>
        <a href="/">The Iron Yard | Orlando</a>
      </h1>
      <div class="blog-description">Happenings and updates from The Iron Yard in Orlando, FL.</div>
      <ul class="links module"></ul><div class="social-icons module clearfix">
        <h2>Elsewhere</h2>
        <div class="wrap"></div>
      </div><form action="/search" class="module search-form" method="get">
        <h2>Search</h2>
        <div class="input-wrap">
            <form>
              <input type="text" id="st-search-input" class="search-field" />
            </form>
            <script type="text/javascript">
            var Swiftype = window.Swiftype || {};
              (function() {
                Swiftype.key = '3We_K2q15Ja1xx25zEqE';

                /** DO NOT EDIT BELOW THIS LINE **/
                var script = document.createElement('script'); script.type = 'text/javascript'; script.async = true;
                script.src = "//s.swiftypecdn.com/embed.js";
                var entry = document.getElementsByTagName('script')[0];
                entry.parentNode.insertBefore(script, entry);
              }());
            </script>
        </div>
      </form></aside>

      (view-source:http://orlando.theironyard.com/)


  [2]
    <aside id="text-29" class="widget widget_text">			<div class="textwidget"><a href="http://desk.pm" target="_blank"><img src="http://john.do/wp-content/uploads/2014/09/desk.png"></img></a>
<center>My app, <a href="http://desk.pm">Desk</a>.</center></div>
		</aside>
          (view-source:http://john.do)

  [3]
  <aside id="text-25" class="widget widget_text">			<div class="textwidget">Twitter: <a href="http://twitter.com/saddington">@Saddington</a><br />
Feedburner: <a href="http://feedburner.google.com/fb/a/mailverify?uri=johnsaddington">Email</a><br />
Feedburner: <a href="http://feeds.feedburner.com/johnsaddington">RSS</a><br />
OS X App: <a href="http://desk.pm">Desk</a><br />
Level Up: <a href="http://theironyard.com/academy">The Iron Yard</a></div>
		</aside>
            (view-source:http://john.do/)
```

###More HTML Tags and examples

####11)``<span>``
* Represents text with no specific meaning, like tagging a section of the code to be referenced to later.

  Examples
  ```html
  [1]  <span class="icon">2</span>
      (view-source:http://orlando.theironyard.com/)

  [2]  <span>(the good, the bad, the ugly, and the &#8220;Ah ha!&#8221; moments)</span>
      (view-source:http://orlando.theironyard.com/)

  [3] <span>Code School</span>
      (view-source:http://orlando.theironyard.com/)
      ```

####12)``<img>``
* Represents an image. I don't think this gets a closing tag, that is, ``</img>``.
It's all one tag ``<img...stuff stuff stuff.../>``.

  Examples:
```html
  [1]
    <img alt="The Iron Yard | Orlando" src="http://static.tumblr.com/37ca133c1a84d5b7856c51a7682df3e9/w5gxxfv/6j4n8vkw8/tumblr_static_20mtuue2w17o0sksogs0c44cw.png" />
(view-source:http://orlando.theironyard.com/)

  [2]
  <img alt="image" src="http://media.tumblr.com/c5b6fcd73c1e6a076269eb477b09c379/tumblr_inline_ndk4rsMem41t311sy.jpg"/>
  (view-source:http://orlando.theironyard.com/)

  [3]
  <img alt="The Iron Yard | Orlando" src="http://33.media.tumblr.com/avatar_31b8d8bf579d_64.png" />
  (view-source:http://orlando.theironyard.com/)
```

####13)``<script>``
* defines an internal script or a link to a script to run on the site. Usually, script written in javascript.

Examples:
```html
  [1]
  <script type="text/javascript" src="//www.google.com/jsapi"></script>
  (view-source:xkcd.com)

  [2]
  <script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-25700708-7', 'auto');
ga('send', 'pageview');
</script>
    (view-source:xkcd.com)

  [3]
  <script type="text/javascript" language="javascript" src="http://assets.tumblr.com/assets/scripts/pre_tumblelog.js?_v=0fe6931f685c5a29060675a836044a62"></script>
  (view-source:orlando.theironyard.com)

```

####14)``<nav>``
* Defines a section of the page that only has navigational links

Examples
```html
  [1]
          <nav id="navnav">
        	<ul class="navnav">
					<li><a href="http://tsbmen.com" class="selected"><img src="/images/tsb-home-icon.png" /></a></li>
					<li><a href="#">CATEGORIES</a>
                    	<ul>
                        <li><a href="http://tsbmen.com/category/features">Editorials</a></li><br>
                        <li><a href="http://tsbmen.com/category/ask-dan">Tips &amp; Guides</a></li><br>
                        <li><a href="http://tsbmen.com/category/street-style">Street Style</a></li><br>
                        <li><a href="http://tsbmen.com/category/what-i-wore-today">WIWT</a></li><br>
                        <li><a href="http://tsbmen.com/category/behind-the-scenes">Behind the Scenes</a></li><br>
                        <li><a href="http://tsbmen.com/category/videos">Videos</a></li><br>
                        <li class="last"><a href="http://tsbmen.com/category/giveaways">Giveaways</a></li><br>
                       </ul>
                       </li>
					<li><a href="about">ABOUT</a></li>
                    <li><a href="contact">CONTACT</a></li>
					<li class="last"><a href="styleguide">LOOKBOOK</a></li>
				</ul>
          </ul>
        </nav>

        (view-source:tsbmen.com)

  [2]
      <nav class="pagehead-nav" role="navigation">
  <a href="/" class="selected js-selected-navigation-item pagehead-nav-item" data-selected-links=" /"><span class="octicon octicon-rss"></span> News Feed</a>
  <a href="/pulls" class="js-selected-navigation-item pagehead-nav-item" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls"><span class="octicon octicon-git-pull-request"></span> Pull Requests</a>
  <a href="/issues" class="js-selected-navigation-item pagehead-nav-item" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues"><span class="octicon octicon-issue-opened"></span> Issues</a>
</nav>
        (view-source:github.com)

  [3]
            <nav>
            <ul><li><a href="http://stompology.com/teachers.aspx">Teachers</a></li><li><a href="http://stompology.com/music.aspx">Music</a></li><li><a href="http://stompology.com/schedule.aspx">Schedule</a></li><li><a href="http://stompology.com/competitions.aspx">Competitions</a></li><li><a href="http://stompology.com/registration-pricing.aspx">Registration &amp; Pricing</a></li><li><a href="http://stompology.com/housing.aspx">Housing</a></li><li><a href="http://stompology.com/join-the-crew.aspx">Join the Crew</a></li><li><a href="http://stompology.com/policies.aspx">Policies</a></li></ul>
        </nav>

        (view-source:www.stompology.com)

```
####15)``<section>``
* Defines a section in a document. Blogs probably use this one a lot, as it will group all the ``<article>``s together.

Examples:
```html
  [1]
  <section class="home">

    <div class="flexslider">
        <ul class="slides">
            <li>
                <img src="/media/20347/stompology_2013_jun08_4812.jpg" alt="Laura Glaess Teaches at Stompology XIII. Photo by Devon Rowland." />
                <p class="flex-caption">Laura Glaess Teaches at Stompology XIII. Photo by Devon Rowland.</p>
            </li>
            .
            .<!-- lots more info that I'm skipping over -->
            .
            </section>

            (view-source:www.stompology.com)

  [2]
  <section id="footer">
        <div class="branding">
          <h3 class="fancy"><a href="#">Chai Assertion Library</a></h3>
        </div>
        <div class="list">
          <ul>
            <li><a href="/guide/installation/">Installation</a></li>
            <li><a href="/guide/styles/">Interface Styles</a></li>
            <li><a href="/guide/plugins/">Developing Plugins</a></li>
          </ul>
        </div>
        <div class="list">
          <ul>
            <li><a href="/api/bdd/">Expect / Should API</a></li>
            <li><a href="/api/assert/">Assert API</a></li>
            <li><a href="/api/plugins/">Plugin Utility API</a></li>
          </ul>
        </div>
        <div class="list">
          <ul>
            <li><a href="/guide/resources/">Getting Help</a></li>
            <li><a href="/api/test/">Test Suite</a></li>
            <li><a href="https://github.com/chaijs/chai/blob/master/History.md" target="_blank">Changelog</a></li>
          </ul>
        </div>
        <div class="list">
          <ul>
            <li><a href="https://github.com/chaijs/chai/issues" target="_blank">Issues</a></li>
            <li><a href="http://groups.google.com/group/chaijs" target="_blank">Google Group</a></li>
            <li><a href="http://travis-ci.org/#!/chaijs/chai" target="_blank">Build Status</a></li>
          </ul>
        </div>
      </section>

      (view-source:chaijs.com)

  [3]
  <section class="gallery-content gallery-content-ipad-air" id="gallery-content-ipad-air">
	<a href="/ipad-air-2/" class="hero-click-target block hero-image" data-analytics-click="prop3:ipad air,prefix:h"></a>
	<div class="hero-content">
		<div class="copy">
			<div id="headings-wrapper">
				<h1 class="imagereplace">iPad Air 2</h1>
				<h2>Change is in the Air.</h2>
			</div>

			<ul class="links">
				<li data-analytics-region="learn more"><a class="icon icon-more" href="/ipad-air-2/" data-analytics-click="prop3:ipad air - learn more">Learn more</a></li>
				<li><a class="icon icon-play" href="/apple-events/2014-oct-event/">Watch the keynote</a></li>
			</ul>
		</div>
	</div>
</section>

  (view-source:apple.com)
```

####16)``<body>``
* represents the content of an html document. There will be only one ``<body>`` tag per web page.

Examples:
```html
  [1]
  <body>
    <div class="container-fluid gray-dark-bg">
      <div class="header-dimmer gray-dark-bg">
        <div class="container">
        .
        .
        .
        .

    </script>
    <!--clicky analytics-->
    <script src="//static.getclicky.com/js"></script>
    <script type="text/javascript">try{ clicky.init(100714900); }catch(e){}</script>
  </body>

  (view-source:theironyard.com)

  [2]
  <body class="page-home">


<nav id="globalheader" class="globalheader" role="navigation" aria-label="Global Navigation" data-hires="false" data-analytics-region="global nav" lang="en-US">
	<div id="gh-content" class="gh-content">
  .
  .
  .
  .
  	<script src="http://images.apple.com/v/home/bg/scripts/home.built.js" type="text/javascript" charset="utf-8"></script>
</body>

  (view-source:apple.com)

  [3]
  <body>
<script type="text/javascript" src="http://files.markerly.com/markerly-cdn.js#pub_id=ma-52f14f168a5ba"></script><script type="text/javascript">var markerly_settings = {"services":"facebook,twitter,googleplus","image_services":"facebook,twitter,pinterest","text_sharing":0}</script>
<div style="width:100%; margin:0 auto; background: url('http://www.tsbmen.com/images/fabric_plaid.png') repeat scroll 0 0 rgba(0, 0, 0, 0);">
<div style="width:415px; margin:10px auto; position:relative; text-align:center; height:120px">
.
.
.
<script type='text/javascript' src='http://tsbmen.com/wp-includes/js/jquery/jquery.js?ver=1.11.0'></script>
<script type='text/javascript' src='http://tsbmen.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.2.1'></script>
<script type='text/javascript' src='http://tsbmen.com/wp-includes/js/comment-reply.min.js?ver=3.9.2'></script>

</body>
        (view-source:tsbmen.com)
```

####17)``<title>``
* Defines the title of the webpage, and will display in either the browser window or browser tab. Can
only accept text, no scripts or images etc.

Examples:

```html
  [1]
  <title>The Iron Yard | Orlando</title>
  (view-source:orlando.theironyard.com)

  [2]
  <title>Apple</title>
  (view-source:apple.com)

  [3]
  <title>TSBmen - The Style Blogger</title>
  (view-source:tsbmen.com)
```

####18)``<style>``
* Used to write inline CSS inside of the html file.
```html
  [1]
  <style type="text/css">body {
  font-size: 17px;
}

p a {
  color: #158cbd;
}

p a:hover {
  text-decoration: underline;
} </style>
        (view-source:orlando.theironyard.com)

  [2]
  <style>
.fixed {
    position: fixed;
    margin-left: 800px;
}
</style>
        (view-source:tsbmen.com)

  [3]
      <style type="text/css">a {
      color: #262f34;
    }
    .load-more-wrap:hover .load-more {
      background-color: #262f34;
    }
    .load-more,
    .load-more-wrap.loading .load-more,
    .load-more-wrap.loading:hover .load-more {
      background-color: #262f34;
    }
    footer a:hover,
    .rte a.tumblr_blog:hover {
      color: #262f34;
    }
    h1 a,
    h2 a,
    h3 a,
    h4 a,
    h5 a,
    h6 a {
      color: #39474e;
    }
    h1 a:hover,
    h2 a:hover,
    h3 a:hover,
    h4 a:hover,
    h5 a:hover,
    h6 a:hover,
    .type-link h1 a:hover .icon {
      color: #262f34;
    }</style>

    (view-source:orlando.theironyard.com)

```

####19)``<figure>``
* represents a figure illustrated in the html document

Examples
```html
  [1]
  <figure class="hero-image scaled-image no-translate no-vertically-center"></figure>
  (view-source:apple.com)

  [2]
  <figure class="logo"></figure>
  (view-source:apple.com)

  [3]
  	<figure class="hero-image no-translate"></figure>
    (view-source:apple.com)
```
####20)``<em>``
* applies bold styling to text

examples:
```html
  [1]
  <em>By Susanna Miller, Campus Director</em>
  (view-source:orlando.theironyard.com)
  [2]
  <em>See? Super excited. And it’s an official picture, because David is in it too (albeit without his actual knowledge)</em>
  (view-source:orlando.theironyard.com)
  [3]
  <em>By <a href="http://theironyard.com/about/team/#tim" target="_blank">Tim Whitacre</a>, Front End Engineering Instructor</em>
  (view-source:atlanta.theironyard.com)
```
