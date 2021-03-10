<template>
    <div class="login-body">
           <div class="login-content">
                <div class="logo_footer white seperator">
                    <span>V</span>
                </div>
                <form class="login_box" id="login_form" action="" method="POST"> 
                    <!-- <?php echo $res && $res != '' ? '<p style="color:red">'. $res .'</p>' : ''; ?> -->
                    <div class="usernameContainer">
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username">
                    </div>
                    <div class="passwordContainer">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password">
                    </div>
                    <div class="login_button">
                        <button type="submit" name="submitted">Login</button>
                    </div>
                </form>
                <div class="login_notregistered">
                    <p>Not registered? 
                        <router-link to="/register">
                        <u>Create an account</u>
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
</template>

<script>
export default {};
</script>
