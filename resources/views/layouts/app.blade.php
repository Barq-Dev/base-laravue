<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <link rel="manifest" href="/manifest.json" />
    <!-- Scripts -->
    <script src="{{ mix('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link rel="icon" href="/images/logo/logo.png">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>

<body>
    {{-- <li>
        <a href="#" onclick="addToHomeScreen()">
            <span class="uk-margin-small-right" data-uk-icon="icon: plus"></span>
            Add to Home Screen
        </a>
    </li> --}}
    <div id="app">
    </div>
</body>
<script>
    // var deferredPrompt;
    // window.addEventListener('beforeinstallprompt', function(event) {
    //     // event.preventDefault();
    //     deferredPrompt = event;
    //     // return false;
    // });

    // function addToHomeScreen() {
    //     // if (deferredPrompt) {
    //     deferredPrompt.prompt();
    //     deferredPrompt.userChoice.then(function(choiceResult) {
    //         console.log(choiceResult.outcome);
    //         if (choiceResult.outcome === 'dismissed') {
    //             console.log('User cancelled installation');
    //         } else {
    //             console.log('User added to home screen');
    //         }
    //     });
    //     deferredPrompt = null;
    //     // }
    // }
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js');
            // addToHomeScreen();
        });
    }
</script>

</html>
