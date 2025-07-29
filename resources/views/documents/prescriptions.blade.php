<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
    <title>Document</title>
    {{-- @vite(['resources/css/app.css'])  --}}
    @include('documents.prescriptions-style')
</head>
<body>
    <div class="space-y-4">
        <div>
            <div class="flex justify-between p-5 bg-gray-50 leading-relaxed">
                <div>
                    <p class="font-semibold">Dr Michael Okafor</p>
                    <p class="text-gray-500">Consultant Physician</p>
                    <p class="text-gray-500">License: MDCN/23456</p>
                </div>
                <div class="text-end" >
                    <p>dr.okafor@lifelinehealth.org</p>
                    <p>+2348021234567</p>
                </div>
            </div>
            <div class="border-2 border-black space-y-3 p-5">
                <div class="flex items-center font-semibold justify-between">
                    <p >Patient Information</p>
                    <p>23 Mar, 2025</p>
                </div>
                <div class="border-b-2"></div>
                <ul class="space-y-2">
                    <li class="flex">
                        <div class="w-1/6">
                            <p class="font-semibold">Name:</p>
                        </div>
                        <div class="w-5/6">
                            <p>Sarah Johnson</p>
                        </div>
                    </li>
                    <li class="flex">
                        <div class="w-1/6">
                            <p class="font-semibold">Age:</p>
                        </div>
                        <div class="w-5/6">
                            <p>32 years</p>
                        </div>
                    </li>
                    <li class="flex">
                        <div class="w-1/6">
                            <p class="font-semibold">Gender:</p>
                        </div>
                        <div class="w-5/6">
                            <p>Female</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <table class="table border-2 border-black">
            <thead class="[&_th]:p-4 [&_th]:border-2 [&_th]:border-black [&_th]:text-black [&_th]:font-semibold [&_th]:text-base">
                <tr>
                    <th class="w-2/5 max-w-[40%]">Medication</th>
                    <th class="w-1/5 max-w-[20%]" >Frequency</th>
                    <th class="w-1/5 max-w-[20%]">Duration</th>
                    <th class="w-1/5 max-w-[20%]">Qty</th>
                </tr>
            </thead>
            <tbody class="[&_td]:p-4 [&_td]:border-2 [&_td]:border-black [&_td]:text-black [&_td]:text-base">
                <tr >
                    <td class="w-2/5 max-w-[40%] p-3 space-y-3">
                        <p>Layosabutamo 50mcg</p>
                        <ul class="list-disc text-gray-500">
                            <li class="ml-4">Drink plenty of water and follow all the prescription that you might have been given.</li>
                        </ul>
                    </td>
                    <td class="w-1/5 max-w-[20%]" >
                        Noctine(Night)
                    </td>
                    <td class="w-1/5 max-w-[20%]">10 days</td>
                    <td class="w-1/5 max-w-[20%]">30</td>
                </tr>
                <tr >
                    <td class="w-2/5 max-w-[40%] p-3 space-y-3">
                        <p>Amoxicillin 500mg</p>
                    </td>
                    <td class="w-1/5 max-w-[20%]" >
                        TDS(3x)
                    </td>
                    <td class="w-1/5 max-w-[20%]">10 days</td>
                    <td class="w-1/5 max-w-[20%]">2</td>
                </tr>
                <tr >
                    <td class="w-2/5 max-w-[40%] p-3 space-y-3">
                        <p>Maxithral 500 mg</p>
                    </td>
                    <td class="w-1/5 max-w-[20%]" >
                        QDS (4x)
                    </td>
                    <td class="w-1/5 max-w-[20%]">10 days</td>
                    <td class="w-1/5 max-w-[20%]">4</td>
                </tr>
                <tr >
                    <td class="w-2/5 max-w-[40%] p-3 space-y-3">
                        <p>Ensomeprazole 20mg</p>
                    </td>
                    <td class="w-1/5 max-w-[20%]" >
                        Main
                    </td>
                    <td class="w-1/5 max-w-[20%]">5 days</td>
                    <td class="w-1/5 max-w-[20%]">30</td>
                </tr>
            </tbody>
        </table>

        <div class="border-2 border-black">
            <div class="p-5">
                <p class="font-semibold">Laboratory Tests</p>
            </div>
            <div class="border border-black"></div>
            <div class="p-5">
                <p>Full blood count (FBC) . To be done within 3 days</p>
            </div>
        </div>

        <div class="border-2 border-black">
            <div class="p-5">
                <p class="font-semibold">Notes</p>
            </div>
            <div class="border border-black"></div>
            <div class="p-5">
                <ul class="list-disc space-y-2 list-inside">
                    <li>Drink plenty of water</li> 
                    <li>Return for follow-up in one week</li> 
                </ul>
            </div>
        </div>
    </div>

    <div class="space-y-2 mt-28">
        <div>
            {{-- <img src="" alt=""> --}}
            <kbd>DrMichealOkafor</kbd>
        </div>
        <div>
            <p class="font-semibold" >Dr Michael Okafor </p>
            <p class="text-gray-500" >Consultant Physician</p>
        </div>
    </div>
</body>
</html>