<template>
        <header>
            <img class="nav-logo" src="../assets/img/logo.png" alt="logo"> 
        <div class="nav-container">
                <uL class="nav-list">
                    <router-link class="nav-item">Home</router-link>
                    <router-link class="nav-item">Workouts</router-link>
                    <router-link class="nav-item">About</router-link>
                </uL>
        </div>
    </header>
</template>


<script>
export default {
    name: "NavHeader",
}
</script>

<style scoped>


.nav-container{
    padding: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background: green;
}



.nav-logo{
    position: absolute;
    width: 10rem;
    height: 10rem;
}

.nav-list{
}

.nav-item{

}

</style>

