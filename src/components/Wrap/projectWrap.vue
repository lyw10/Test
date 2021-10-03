<template>
    <div class="wrapper">
        <div class="header-content">
            <!--<p><slot>BBBBBB</slot></p>-->
            <p>{{$store.state.projectData.header[$route.params.id - 1].title}}</p>
        </div>
    </div>
</template>
