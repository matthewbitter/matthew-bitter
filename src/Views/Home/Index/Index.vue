<template>
    <div id="container">
        <div>
            <h1>MATTHEW BITTER</h1>
            <h2>WEB & GAME DEVELOPER</h2><a href="MatthewBitterResume.docx" title="Download Resume">Resume</a>
        </div>
    </div>
</template>

<script lang="ts" src="./Index.ts"></script>

<style type="scss">

    h1, h2
    {
        line-height: 1;
        margin: 2vh;
    }

    h1
    {
        color: #a3383c;
        text-shadow: 0 0.5vh 0 rgba(163, 56, 60, 0.2);
    }

    h2
    {
        color: #74844f;
        text-shadow: 0 0.5vh 0 rgba(116, 132, 79, 0.2);
    }

    a
    {
        display: inline-block;
        text-decoration: none;
        color: #577d8b !important;
        border: .33vh solid #577d8b;
        padding: 1vh 2vh;
        transition: background-color .125s 0s ease-in-out, color .125s 0s ease-in-out;
        margin-top: 2vh;
        box-shadow: 0 0.5vh 0 0 rgba(87, 125, 139, 0.2)
    }

    a:hover
    {
        background-color: #577d8b;
        color: #111
    }

    #container
    {
        display: table;
        width: 100%;
        height: 100%;

        font-family: 'Oswald';
        font-size: 5vh;
    }

    #container > div
    {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }

    .theme--dark
    {
        background-color: #111 !important;
    }

</style>