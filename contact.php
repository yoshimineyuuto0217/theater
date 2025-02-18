<?php
/* Template Name: contact */
?>
<?php get_header(); ?>
<section class="section contact" id="contact">
        <div class="contact-inner">
          <div class="block left come-to-view">
            <div class="inner">
              <h2 class="font-en">CONTACT</h2>
              <p class="ja">下記フォームより必要事項を記入いただきSendボタンを押してください。</p>
              <p class="en">Please fill in the necessary information on the form and press the send button.</p>
              <div class="form-wrapper">
                <form method="POST" action="/form/mail-contact.php" enctype="multipart/form-data">
                  <dl class="form-block lead-next">
                    <dt class="font-en"><label>Name</label><span class="required">※required</span></dt>
                    <dd><input type="text" name="Name" autocomplete="name" class="name-area" required></dd>
                    <dt class="font-en"><label>E-mail</label><span class="required">※required</span></dt>
                    <dd><input type="email" name="E-mail" size="50" autocomplete="email" autocorrect="off"
                        autocapitalize="off" required></dd>
                    <dt class="font-en"><label>Phone Number</label><span class="required">※required</span></dt>
                    <dd><input type="tel" name="PhoneNumber" size="50" autocomplete="tel" required></dd>
                    <dt class="font-en message-title"><label>Message</label><span class="required">※required</span>
                    </dt>
                    <dd class="message"><textarea name="Message" cols="40" rows="3" required=""></textarea></dd>
                  </dl>
                  <div class="submit">
                    <button type="submit" class="font-en link link-common large contact">CONFIRM</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <?php get_footer(); ?>