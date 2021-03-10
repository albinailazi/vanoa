<template>
     <div class="login-body">
            <div class="login-content">
                <div class="logo_footer white seperator">
                    <span>V</span>
                </div>
                <form class="login_box" id="register_form" action="" method="POST"> 
                    <!-- <?php echo $res && $res != '' ? '<p style="color:red">'. $res .'</p>' : ''; ?> -->
                    <div class="emailContainer">
                        <label for="email"> Email </label>
                        <input type="email" name="email" id="email">
                    </div>
                    <div class="usernameContainer">
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username">
                    </div>
                    <div class="passwordContainer">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password">
                    </div>
                    <div class="confirmPasswordContainer">
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword">
                    </div>
                  
                    <div class="register_button">
                        <button type="submit" name="submitted">Sign up</button>
                    </div>
                    <div class="login_notregistered">
                        <p>If registered.  
                            <a href="loginForm.php"><b>Login here</b></a>
                        </p>
                    </div>
                </form> 
            </div>
        </div> 
</template>