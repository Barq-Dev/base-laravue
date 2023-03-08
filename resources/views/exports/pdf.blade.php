<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ config('app.name', 'Laravel') }}</title>

</head>

<body>
    <div class="container mt-5">
        <table class="tg table table-bordered mb-5">
            <thead>
                <tr>
                    @foreach ($export['headers'] ?? [] as $key => $item)
                        <th class="tg-1wig" scope="col">
                            <strong>{{ucwords(str_replace('_',' ', $item))}}</strong>
                        </th>
                    @endforeach
                </tr>
            </thead>
            <tbody>
                
                @foreach ($export['data'] ?? [] as $value)
                <tr>
                    
                    @foreach ($export['headers'] ?? [] as $colItem)
                        <td class="tg-0lax" scope="row">
                            {{ $value[$colItem]?? '-' }}
                        </td>
                    @endforeach
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>

</body>
<style type="text/css">
    table{
        table-layout: fixed;
        width: 100%;
        
    }
    td { white-space: nowrap; }
    .tg {
        border-collapse: collapse;
        border-spacing: 0;
    }

    .tg td {
        border-color: black;
        border-style: solid;
        border-width: 1px;
        font-family: Arial, sans-serif;
        font-size: 5vw;
        overflow: hidden;
        padding: 10px 5px;
        word-break: normal;
    }

    .tg th {
        border-color: black;
        border-style: solid;
        border-width: 1px;
        font-family: Arial, sans-serif;
        font-size: 5vw;
        font-weight: normal;
        overflow: hidden;
        padding: 10px 5px;
        word-break: normal;
    }

    .tg .tg-z9od {
        font-size: 5vw;
        text-align: left;
        vertical-align: top
    }

    .tg .tg-5h6x {
        background-color: #c0c0c0;
        font-size: 5vw;
        font-weight: bold;
        text-align: left;
        vertical-align: top
    }

</style>

</html>
